import google.generativeai as genai
from django.shortcuts import render
from rest_framework.response import Response
from django.http import HttpResponse
from django.db import models
from django.db import connection  # Import for raw SQL queries


# Configuration (move these to Django settings)
GEMINI_API_KEY = "AIzaSyDPY2W_6k5O1hhgRgi-cLTyDHoG4KaDspQ"  # Replace with your actual API key.  Load securely from environment.
MODEL_NAME = "Gemini 2.0 Flash" # Or other suitable gemini model

# Initialize Gemini
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel(MODEL_NAME)



def compare_data_with_gemini(our_data_text, user_data_text):
    """
    Compares our data and user data using Gemini and returns a comparison result string.
    """

    prompt = f"""
    Compare the following two pieces of text and provide a similarity score (0-100) and a brief explanation of the similarities and differences:

    Our Data: {our_data_text}

    User Data: {user_data_text}

    Output the similarity score and explanation. Be concise and highlight the main points.
    """
    try:
        response = model.generate_content(prompt)
        comparison_result = response.text

        # Handle potential safety issues
        if response.prompt_feedback and response.prompt_feedback.block_reason:
            print(f"Gemini blocked the response: {response.prompt_feedback.block_reason}")
            comparison_result = "Comparison blocked by Gemini due to safety concerns."

    except Exception as e:
        print(f"Error during Gemini comparison: {e}")
        comparison_result = "Error during Gemini comparison. Please check logs."

    return comparison_result


def compare_view(request):
    """
    Django view to compare data using raw SQL and Gemini, and display the results.
    """
    if request.method == 'POST':  # Assuming form submission
        our_data_id = request.POST.get('our_data_id')
        user_data_id = request.POST.get('user_data_id')

        try:
            # Raw SQL queries to fetch the data
            with connection.cursor() as cursor:
                cursor.execute("SELECT data_text FROM core_ourdata WHERE id = %s", [our_data_id])  # Replace 'core' with your app name
                our_data_text = cursor.fetchone()[0]  # Extract the text

                cursor.execute("SELECT user_text FROM core_userdata WHERE id = %s", [user_data_id])  # Replace 'core' with your app name
                user_data_text = cursor.fetchone()[0]  # Extract the text

            # Gemini Comparison
            comparison_result = compare_data_with_gemini(our_data_text, user_data_text)

            # Raw SQL queries to fetch related data
            with connection.cursor() as cursor:
                cursor.execute("SELECT related_data FROM core_relatedtable1 WHERE data_id = %s", [our_data_id])
                related_data_1 = [row[0] for row in cursor.fetchall()]  # List of related_data

                cursor.execute("SELECT other_related_data FROM core_relatedtable2 WHERE data_id = %s", [our_data_id])
                related_data_2 = [row[0] for row in cursor.fetchall()]  # List of other_related_data

            context = {
                'our_data_text': our_data_text,
                'user_data_text': user_data_text,
                'comparison_result': comparison_result,
                'related_data_1': related_data_1,  # Pass the data to the template
                'related_data_2': related_data_2,  # Pass the data to the template
            }
            return render(request, 'comparison_results.html', context)

        except Exception as e:
            return Response(f"An unexpected error occurred: {e}")  # Better error message

    # Render form (GET request)
    our_data_items = OurData.objects.all()  # Still using ORM for this
    user_data_items = UserData.objects.all()  # Still using ORM for this
    return render(request, 'comparison_form.html', {'our_data_items': our_data_items, 'user_data_items': user_data_items})