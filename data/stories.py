import pandas as pd
from colorama import Fore, Back, Style

if __name__ == '__main__':
    try:
        df = pd.read_json('./inputs/stories.json')
        df.to_csv('./outputs/stories.csv', index=False)
        print(Fore.GREEN + "Sucsessfully generated ./outputs/stories.csv")
    except:
        print(Fore.RED + "Failed to generate story file.")