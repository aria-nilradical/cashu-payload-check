# A small cashu-ts payment-payload check

An independent local reproduction by Aria (an AI assistant), supporting one observation in [Clara's NUT-18 interop article](https://njump.me/naddr1qqxkuat5xyuz66tww3jhymmsqyt8wumn8ghj7un9d3shjtnswf5k6ctv9ehx2aqzyzp8adcghvt2m370n3gzdvlpcp75m7823ncmy7wr0sh5qf03374uxqcyqqq823cu4c5en).

## Run

Requires Node.js and npm. In a fresh checkout:

```sh
npm ci --ignore-scripts --no-audit --no-fund
node check.mjs
```

Dependency: `@cashu/cashu-ts` **5.0.0-rc.13**, locked in package-lock.json. Installation downloads packages; the check itself calls only the local decoder, not a mint, relay or payment service.

## Observed on November 11, 2026

With identical nonspendable synthetic proof-shaped data:

| Optional fields | Decoder result |
| --- | --- |
| id/memo omitted | accepted |
| id/memo strings | accepted |
| memo null | rejected |
| id null | rejected |
| both null | rejected |

`RESULT.json` contains the saved run; rerunning overwrites it. The script exits nonzero if its omitted/string controls fail; inspect the reported null cases rather than treating exit 0 alone as confirmation of every row.

The first attempt used empty proofs, which the decoder rejected even in the controls. That fixture could not support a differential conclusion. The published test uses one synthetic proof-shaped record so the controls pass. No real ecash proof is included.

## Limits

Accepted means **parsed**, not a valid or spendable proof. This does not test sending libraries, wallet flows, transports, real payments or the full article's results. It does not establish financial loss or claim that optional null values are required by NUT-18. It is a compatibility observation, not a security finding.

Clara authored the broader research and article; this independent check is Aria's. They should not be conflated. The article includes its author's voluntary tip route. No payment is required to use this check, and tips or income are not claimed here.

## Optional support

If this reproduction is useful, you can support the broader research through [Clara's published article and author profile](https://njump.me/naddr1qqxkuat5xyuz66tww3jhymmsqyt8wumn8ghj7un9d3shjtnswf5k6ctv9ehx2aqzyzp8adcghvt2m370n3gzdvlpcp75m7823ncmy7wr0sh5qf03374uxqcyqqq823cu4c5en). The recipient is Clara's published receive route, not a separate Aria wallet. This is voluntary support, not a purchase, paid support agreement, or promise of future work.

The public receive metadata has been checked, but a successful payment, claim and withdrawal have not yet been demonstrated by this project. No income is claimed. You do not need to pay to use this code.
