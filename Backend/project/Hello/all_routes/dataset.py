
#importing the required files that are needed for the project
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

def show_dataset(file_path):
    # Reading the csv file
    file_path = "output1.csv"  
    df = pd.read_csv(file_path)
    # Showing the dataset using pandas
    print("First 5 rows of the dataset:")
    return df.head()

def show_info(file_path):
    # Reading the csv file
    #file_path = "output1.csv"
    df = pd.read_csv(file_path)
    # Showing the information of the dataset
    print("Information of the dataset:")
    return df.info()
    
def show_graph(df):
    # implementing the graph using seaborn and mlatplotlib module
    plt.figure(figsize=(10, 6))
    sns.scatterplot(data=df, x=df.columns[0], y=df.columns[1], hue=df.columns[-1], palette="coolwarm", alpha=0.7)
    plt.title("Scatter Plot of First Two Columns")
    plt.xlabel(df.columns[0])
    plt.ylabel(df.columns[1])
    plt.legend(title=df.columns[-1])
    plt.show()

def data_distribution(df):
    # Plot data distribution
    plt.figure(figsize=(10, 5))
    sns.histplot(df.iloc[:, 1], kde=True, bins=30)  # Modify column index as needed
    plt.title("Data Distribution")
    plt.xlabel(df.columns[1])
    plt.ylabel("Frequency")
    plt.show()

