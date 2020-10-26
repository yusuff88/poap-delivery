import os
import csv
import json

from web3 import Web3

COMP_ID = 418
YAM_ID = 419
YFI_ID = 420
BAL_ID = 416

POAPS = [COMP_ID, YAM_ID, YFI_ID, BAL_ID]

# Address of the Coin Gecko Airdrop Contract
ADDRESS = '0x32A3c33C5324838077913AeFF595533c2bBdf561'

XDAI_HTTPS_PROVIDER = 'https://xdai.poanetwork.dev/'

def get_abi(name):
    abi_file = os.path.join('..', name)
    if os.path.exists(abi_file):
        with open(abi_file, 'r') as f:
            abi = json.load(f)
        return abi.get('abi')

def main():
    print('> Starting Coin Gecko Yield Farming formatting')
    formatted_output = {}
    addresses_list = []
    with open('original.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            address = row[0].strip().lower()
            if not Web3.isAddress(address):
                print('>>> ERROR > Invalid address: ', address)
            badge = int(row[1])
            addresses_list.append(address)
            if address in formatted_output:
                formatted_output[address].append(POAPS[badge - 1])
            else:
                formatted_output[address] = [POAPS[badge - 1]]

    # Sort IDs
    for each in formatted_output.keys():
        formatted_output[each].sort()

    original_file_length = sum(1 for line in open('original.csv', 'r') if line.strip())
    amount_of_poaps = sum(len(formatted_output[each]) for each in formatted_output.keys())
    print('')
    print('>> Amount from original file:', original_file_length)
    print('>> Amount of POAPs formatted:', amount_of_poaps)
    amount_validation = 'SUCCESS' if original_file_length == amount_of_poaps else 'ERROR'
    print('>>> Amount validation:', amount_validation)
    print('')

    duplicate_validation = 'SUCCESS' if len(formatted_output) == len(set(addresses_list)) else 'ERROR'
    print('>>> Duplicate address validation:', duplicate_validation)
    print('')


    # Instantiate web3
    provider = Web3.HTTPProvider(XDAI_HTTPS_PROVIDER)
    web3 = Web3(provider)

    # Verify against initial contract
    deliveryContract = web3.eth.contract(address=ADDRESS, abi=get_abi('PoapAirdrop.json'))

    with open('output-v1.json', 'r') as json_file:
        data_v1 = json.load(json_file)

        # Iterate through new output
        for address, events in data_v1.items():
            print('-'*50, address, '-'*50)
            chk_address = web3.toChecksumAddress(address)
            claimed = deliveryContract.functions.claimed(chk_address).call()
            if not claimed:
                # Merge both arrays
                if address in formatted_output:
                    print('Merge')
                    formatted_output[address] = formatted_output[address] + data_v1[address]
                else:
                    print('Add new key')
                    formatted_output[address] = data_v1[address]

    # Sort IDs
    for each in formatted_output.keys():
        formatted_output[each].sort()

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    print('> End of script')

if __name__ == '__main__':
    main()
