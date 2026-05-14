# Uploaded Artifact Inventory

This repo is being populated from the current Synthia/Morph/MRNN artifact bundle.

## Source uploads received

| Upload | Type | Destination |
|---|---|---|
| `mrnn-os.zip` | MRNN runtime prototype | `core/runtime/mrnn-os/` |
| `stellar-orchestrator (1).zip` | orchestrator service | `services/stellar-orchestrator/` |
| `trident_patched.zip` | Trident/Synthia UI patch | `apps/trident-patched/` |
| `morph-render-backend-piece.zip` | backend + Python resonance modules | `services/resonance-backend/` |
| `morph-netlify-drag-drop-site.zip` | prototype ecosystem archive | `archive/prototypes/morph-netlify-drag-drop-site/` |
| `metabolic-library (1).html` | metabolic memory UI | `apps/metabolic-library/index.html` |
| `metabolic-library (2).html` | duplicate/variant metabolic memory UI | `archive/duplicates/metabolic-library-2.html` |
| `morphnn-resonance-os (1).html` | dashboard/mobile resonance OS shell | `apps/morphnn-resonance-os/index.html` |
| `morph_generative_model (13).py` | design-body generative model | `models/morph-generative/morph_generative_model.py` |
| `synth_context_protocol.py` | agent/context protocol | `core/protocols/synth-context-protocol/synth_context_protocol.py` |

## Current placement rule

Production-bound code goes into `services/`, reusable contracts go into `packages/`, user-facing shells go into `apps/`, low-level runtime goes into `core/`, model code goes into `models/`, and older prototype worlds go into `archive/`.

## Note

The GitHub connector available here can create text files but does not directly stream local ZIP binaries from the ChatGPT upload mount into GitHub. The ZIPs should be unpacked into the destinations above. Text/code contents that can be safely written through the connector should be placed directly in their target folders.
