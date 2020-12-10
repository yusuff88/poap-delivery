# #KEEP Network Mainnet Stakers

### Data source
Data was taken from the result of running the following command

Datasource: 
```curl
curl 'https://api.thegraph.com/subgraphs/name/miracle2k/all-the-keeps' --compressed -X 'POST' -H 'Content-Type: application/json' --data-binary '{"query":"{ operators(first: 200, orderBy:stakedAt) {\n    id\n    owner\n    beneficiary\n    stakedAt\n  }\n}","variables":null}'|jq '.data.operators[].owner'
```

### Formatting
To process the file to the format needed for the merkle tree process, run the following command:
```py
python3 format-file.py
```

A new file will be generated and some validations will be run

