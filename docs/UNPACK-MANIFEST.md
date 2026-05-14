# Unpack Manifest

This repo uses `.github/workflows/unpack-artifact-bundles.yml` to unpack ZIP files dropped into `artifact-bundles/`.

## Placement rules

- `synthia-trident-kernel*`, `stellar-orchestrator*`, `morph-render-backend*`, `backend*`, `server*` → `services/synthia-server/`
- `Resonance-network*` → `apps/resonance-network/`
- `resonance-os-web*` → `apps/resonance-os-web/`
- `resonance-os-phone*` → `apps/resonance-phone-shell/`
- `resonance-shell-remount*` → `core/runtime/remount/`
- `mrnn-os*` → `core/runtime/mrnn-os/`
- `*production*` → `deployments/production/`
- `morph-netlify-drag-drop*` and prototype bundles → `archive/prototypes/`
- unknown bundles → `archive/raw-bundles/`

## Rule

Backend/server files belong in `services/synthia-server/`.
