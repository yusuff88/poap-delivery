import csv
import json

from web3 import Web3

ETHTRADER_1M_MEMBERS_EVENT_ID = 1269

def main():
    print('> Starting r/ethtrader 1 Million Members')
    formatted_output = {}
    addresses_set = set()
    with open('original.txt', encoding='utf-8-sig') as original_file:
        for each in original_file:
            if each == '\n':
                continue
            address = each.rstrip()
            if not Web3.isAddress(address):
                print('>>> ERROR > Invalid address: ', address)
            formatted_output[address.lower()] = [ETHTRADER_1M_MEMBERS_EVENT_ID, ]

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    original_file_length = sum(1 for line in open('original.txt', 'r') if line != '\n')
    original_file_without_duplicates_length = len(set(line for line in open('original.txt', 'r') if line != '\n'))
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
