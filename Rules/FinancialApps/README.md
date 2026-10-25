# Financial Apps DIRECT rules

Domain-only DIRECT rules for Bitget Wallet, iFAST GB, Maya, Plasma One, Wise, DITO and OKX. They do not exempt whole apps from VPN interception; third-party KYC/identity services, wallet RPC hosts and dynamic CDNs may use other domains. Inspect live connection logs before adding any extra domains. In particular, do not route all Apple/Google/Cloudflare/Privy traffic as DIRECT.

## Clash / Mihomo

```yaml
rule-providers:
  FinanceDirect:
    type: http
    behavior: classical
    format: yaml
    url: https://raw.githubusercontent.com/cuocuo/third/main/Rules/FinancialApps/Clash.yaml
    path: ./ruleset/FinanceDirect.yaml
    interval: 86400
rules:
  - RULE-SET,FinanceDirect,DIRECT
```

Place the rule-set before the OpenAI, geolocation and MATCH rules; retain your other rules. 

## Domain groups

- Bitget Wallet: \`bitget.com\`, \`bitget.site\`, \`bitgetwallet.com\`, \`bgwapi.io\`
- iFAST GB: \`ifastgb.com\`
- Maya: \`maya.ph\`, \`paymaya.com\`
- Plasma One: \`plasma.org\`
- Wise: \`wise.com\`, \`transferwise.com\`
- DITO: \`dito.ph\`
- OKX: \`okx.com\`
