import csv
import json

COMP_ID = 418
YAM_ID = 419
YFI_ID = 420
BAL_ID = 416

POAPS = [COMP_ID, YAM_ID, YFI_ID, BAL_ID]

def main():
    print('> Starting Coin Gecko Yield Farming formatting')
    formatted_output = {}
    addresses_list = []
    with open('original.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            address = row[0].strip().lower()
            badge = int(row[1])
            addresses_list.append(address)
            if address in formatted_output:
                formatted_output[address].append(POAPS[badge - 1])
            else:
                formatted_output[address] = [POAPS[badge - 1]]

    # Sort IDs
    for each in formatted_output.keys():
        formatted_output[each].sort()

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

    no_repeated_poaps = True
    for each in formatted_output.keys():
        if len(formatted_output[each]) != len(set(formatted_output[each])):
            no_repeated_poaps = False
            break

    print('>>> Duplicate POAP validation:', 'SUCCESS' if no_repeated_poaps else 'ERROR')
    print('')

    duplicate_validation = 'SUCCESS' if len(formatted_output) == len(set(addresses_list)) else 'ERROR'
    print('>>> Duplicate address validation:', duplicate_validation)
    print('')

    print('> End of script')

if __name__ == '__main__':
    main()
