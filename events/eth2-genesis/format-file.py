import csv
import json

from web3 import Web3

ETH2_GENESIS_EVENT_ID = 661

def main():
    print('> Starting ETH2 Genesis formatting')
    formatted_output = {}
    addresses_list = []
    with open('original.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            address = row[0].strip().lower()
            if not Web3.isAddress(address):
                print('>>> ERROR > Invalid address: ', address)
            addresses_list.append(address)
            formatted_output[address] = [ETH2_GENESIS_EVENT_ID, ]

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    original_file_length = sum(1 for line in open('original.csv', 'r') if line.strip())
    amount_of_poaps = sum(len(formatted_output[each]) for each in formatted_output.keys())
    print('')
    print('>> Amount from original file:', original_file_length)
    print('>> Amount of POAPs formatted:', amount_of_poaps)
    amount_validation = 'SUCCESS' if original_file_length == amount_of_poaps else 'ERROR'
    print('>>> Amount validation:', amount_validation)
    print('')

    duplicate_validation = 'SUCCESS' if len(addresses_list) == len(set(addresses_list)) else 'ERROR'
    print('>>> Duplicate address validation:', duplicate_validation)
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
