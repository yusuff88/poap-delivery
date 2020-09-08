import json

from web3 import Web3
from ens.main import ENS
from web3.auto.infura import w3

MUIR_GLACIER_EVENT_ID = 232

def main():
    print('> Starting Muir Glacier formatting')
    formatted_output = {}
    addresses_list = []
    with open('original.txt') as original_file:
        for each in original_file:
            address = each.strip().lower()
            if not Web3.isAddress(address):
                resolved_address = w3.ens.address(address)
                if not resolved_address or not Web3.isAddress(resolved_address):
                    print('>>> ENS NOT FOUND: ', address)
                else:
                    address = resolved_address.lower()
            if address and Web3.isAddress(address):
                addresses_list.append(address)
                formatted_output[address] = [MUIR_GLACIER_EVENT_ID, ]

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    print('')
    print('>> Validate keys as addresses')
    all_valid_addresses = True
    for each in formatted_output.keys():
        if not Web3.isAddress(each):
            all_valid_addresses = False
            break
    print('>>> Address validation:', 'SUCCESS' if all_valid_addresses else 'ERROR')


    original_file_length = sum(1 for line in open('original.txt', 'r') if line.strip())
    print('')
    print('>> Amount from original file:', original_file_length)
    print('>> Amount of addresses formatted:', len(formatted_output))
    amount_validation = 'SUCCESS' if len(formatted_output) == original_file_length else 'ERROR'
    print('>>> Amount validation:', amount_validation)
    print('')

    duplicate_validation = 'SUCCESS' if len(formatted_output) == len(set(addresses_list)) else 'ERROR'
    print('>>> Duplicate address validation:', duplicate_validation)
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
