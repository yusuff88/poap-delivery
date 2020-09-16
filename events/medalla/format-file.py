import json

TEKU_ID = 302
PRYSM_ID = 303
LIGHTHOUSE_ID = 304
NIMBUS_ID = 305
LODESTAR_ID = 338

def main():
    print('> Starting Medalla formatting')
    formatted_output = {}
    addresses_list = []
    with open('original.json') as json_file:
        data = json.load(json_file)
        for address, networks in data.items():
            addresses_list.append(address.lower())
            formatted_output[address.lower()] = []
            if networks['teku']:
                formatted_output[address.lower()].append(TEKU_ID)
            if networks['prysm']:
                formatted_output[address.lower()].append(PRYSM_ID)
            if networks['lighthouse']:
                formatted_output[address.lower()].append(LIGHTHOUSE_ID)
            if networks['nimbus']:
                formatted_output[address.lower()].append(NIMBUS_ID)
            if networks['lodestar']:
                formatted_output[address.lower()].append(LODESTAR_ID)

    with open('output.json', 'w') as outfile:
        json.dump(formatted_output, outfile, indent=4)

    print('')
    print('>> Amount from original file:', len(data))
    print('>> Amount of addresses formatted:', len(formatted_output))
    amount_validation = 'SUCCESS' if len(formatted_output) == len(data) else 'ERROR'
    print('>>> Amount validation:', amount_validation)
    print('')
    duplicate_validation = 'SUCCESS' if len(formatted_output) == len(set(addresses_list)) else 'ERROR'
    print('>>> Duplicate address validation:', duplicate_validation)
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
