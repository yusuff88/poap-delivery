import csv
import json

from web3 import Web3

INVERSE_EVENT_ID = 1111

def main():
    print('> Starting Inverse Finance Original DAO 409')
    formatted_output = {}
    addresses_set = set()
    with open('original.csv', encoding='utf-8-sig') as original_file:
        for each in original_file:
            if each == '\n':
                continue
            address = each.rstrip()
            address = address.lower()
            if not Web3.isAddress(address):
                print('>>> ERROR > Invalid address: ', address)
            else:
                formatted_output[address] = [INVERSE_EVENT_ID, ]

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    # Don't count the first line
    original_file_length = sum(1 for line in open('original.csv', 'r') if line != '\n') - 1
    original_file_without_duplicates_length = len(set(line for line in open('original.csv', 'r') if line != '\n')) - 1
    print('')
    print('>> Amount from original file:', original_file_length)
    print('>> Amount without duplicates from original file:', original_file_without_duplicates_length)
    print('>> Amount of addresses formatted:', len(formatted_output))
    amount_validation = 'SUCCESS' if len(formatted_output) == original_file_without_duplicates_length else 'ERROR'
    print('>>> Amount validation:', amount_validation)
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
