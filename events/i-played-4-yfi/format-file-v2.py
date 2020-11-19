import json
from web3 import Web3
import os

EVENT_ID = 478
# Address of the I PLayed 4 YFI Contract
ADDRESS_V1 = '0x34D2f71E6C7FEB5EdDa79f6C9108226F678dDec6'
ADDRESS_V2 = '0x94804cd05c6976517096Ff0c82A18D01Cc924267'

HTTPS_PROVIDER = 'https://dai.poa.network'

def get_abi(name):
    abi_file = os.path.join('..', name)
    if os.path.exists(abi_file):
        with open(abi_file, 'r') as f:
            abi = json.load(f)
        return abi.get('abi')

def main():
    print('> Starting I player 4 YFI')
    formatted_output = {}
    claimed_addresses = []
    addresses_list = []
    # Instantiate web3
    provider = Web3.HTTPProvider(HTTPS_PROVIDER)
    web3 = Web3(provider)

    # Get the contract
    deliveryContractV1 = web3.eth.contract(address=ADDRESS_V1, abi=get_abi('PoapAirdrop.json'))
    deliveryContractV2 = web3.eth.contract(address=ADDRESS_V2, abi=get_abi('PoapAirdrop.json'))

    with open('original.txt', 'r') as original_file:
        original_file = [x.rstrip("\n") for x in original_file.readlines()]
        for address in original_file:
            chk_address = web3.toChecksumAddress(address)
            addresses_list.append(address)

            # Check if the user claimed the address
            if not deliveryContractV1.functions.claimed(chk_address).call() and not deliveryContractV2.functions.claimed(chk_address).call():
                formatted_output[address] = [EVENT_ID, ]
                # Print in green
                print(address, u'\033[92m didn\'t claim \033[0m')
            else:
                claimed_addresses.append(address)
                # Print in red
                print(address, u'\033[91m claimed \033[0m')

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    original_file_length = sum(1 for line in open('original.txt', 'r') if line.strip())
    print('')
    print('>> Amount from original file:', original_file_length)
    print('>> Amount of addresses formatted:', len(formatted_output))
    print('>> Amount of addresses claimed:', len(claimed_addresses))
    amount_validation = 'SUCCESS' if len(formatted_output) + len(claimed_addresses)  == original_file_length else 'ERROR'
    print('>>> Amount validation:', amount_validation)
    print('')

    duplicate_validation = 'SUCCESS' if len(addresses_list) == len(set(addresses_list)) else 'ERROR'
    print('>>> Duplicate address validation:', duplicate_validation)
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
