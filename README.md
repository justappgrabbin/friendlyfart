# friendlyfart

A Synthia-compatible workspace for assembling the current system pieces into one living build map.

## Purpose

`friendlyfart` is the staging repo for sorting, naming, and connecting the pieces of the Synthia / Morph / MRNN ecosystem without flattening them into one boring blob.

It is meant to hold:

- canonical core contracts
- address and field-signature registry scaffolds
- design-body registry scaffolds
- orchestrator bridge notes
- model placement maps
- dashboard/app prototypes
- archive references for older fragments

## Current scaffold

```txt
apps/
  dashboard-shell/

services/
  canonical-core/
  address-registry/
  design-registry/
  orchestrator-bridge/

packages/
  synthia-types/

docs/
  SYSTEM-MAP.md
  MODEL-PLACEMENT.md
  NEXT-STEPS.md
```

## Rule of the repo

Do not make every prototype pretend to be production. Production code goes in `services/`, shared contracts go in `packages/`, surfaces go in `apps/`, and older/raw fragments go in `archive/` later.
