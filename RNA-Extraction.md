---
layout: protocol
title: RNA Extraction
author: "Opentrons (verified)"
author_link: "https://opentrons.com/"
grand_parent: Protocols
parent: Covid Directory
summary: "<div style='margin-left: 2em; margin-top: 0.5em'>This flexible protocol is designed for commercial RNA extraction workflows in COVID-19 sample processing, with steps including binding buffer addition, bead washing, and final elution. Lysed samples are loaded on a magnetic module in a NEST 96-deepwell plate for traceability and consistency. Complex parameters such as tips conservation and tracking can be set for efficient runs.</div>"

description_content: |
  <p>This is a flexible protocol accommodating a wide range of commercial RNA extraction workflows for COVID-19 sample processing. The protocol is broken down into 5 main parts:</p>
  <ul>
    <li>binding buffer addition to samples</li>
    <li>bead wash 3x using magnetic module</li>
    <li>final elution to chilled PCR plate</li>
  </ul>
  <p>Lysed samples should be loaded on the magnetic module in a NEST 96-deepwell plate. For reagent layout in the 2 12-channel reservoirs used in this protocol, please see "Setup" below.</p>
  <p>For sample traceability and consistency, samples are mapped directly from the magnetic extraction plate (magnetic module, slot 4) to the elution PCR plate (temperature module, slot 1). Magnetic extraction plate well A1 is transferred to elution PCR plate A1, extraction plate well B1 to elution plate B1, …, D2 to D2, etc.</p>
  <p>Explanation of complex parameters below:</p>
  <ul>
    <li>
      <code>park tips</code>: If set to <code>yes</code> (recommended), the protocol will conserve tips between reagent addition and removal. Tips will be stored in the wells of an empty rack corresponding to the well of the sample that they access (tip parked in A1 of the empty rack will only be used for sample A1, tip parked in B1 only used for sample B1, etc.). If set to <code>no</code>, tips will always be used only once, and the user will be prompted to manually refill tipracks mid-protocol for high throughput runs.
    </li>
    <li>
      <code>track tips across protocol runs</code>: If set to <code>yes</code>, tip racks will be assumed to be in the same state that they were in the previous run. For example, if one completed protocol run accessed tips through column 5 of the 3rd tiprack, the next run will access tips starting at column 6 of the 3rd tiprack. If set to <code>no</code>, tips will be picked up from column 1 of the 1st tiprack.
    </li>
    <li>
      <code>flash</code>: If set to <code>yes</code>, the robot rail lights will flash during any automatic pauses in the protocol. If set to <code>no</code>, the lights will not flash.
    </li>
  </ul>

materials_content: |
  <p>To purchase tips, reagents, or pipettes, please visit our <a href="https://shop.opentrons.com/">online store</a> or contact our sales team at <a href="mailto:info@opentrons.com">info@opentrons.com</a>
  </p>
  <ul>
    <li>
      <a href="https://shop.opentrons.com/collections/hardware-modules/products/magdeck">Opentrons Magnetic Module GEN2</a>
    </li>
    <li>
      <a href="https://shop.opentrons.com/collections/hardware-modules/products/tempdeck">Opentrons Temperature Module GEN2</a>
    </li>
    <li>
      <a href="https://labware.opentrons.com/nest_12_reservoir_15ml">NEST 12 Well Reservoir 15 mL</a>
    </li>
    <li>
      <a href="https://labware.opentrons.com/nest_1_reservoir_195ml">NEST 1 Well Reservoir 195 mL</a>
    </li>
    <li>
      <a href="https://labware.opentrons.com/nest_96_wellplate_100ul_pcr_full_skirt">NEST 96 Well Plate 100 µL PCR Full Skirt</a>
    </li>
    <li>
      <a href="https://labware.opentrons.com/nest_96_wellplate_2ml_deep">NEST 96 Deepwell Plate 2mL</a>
    </li>
    <li>
      <a href="https://shop.opentrons.com/collections/opentrons-tips/products/opentrons-200ul-filter-tips">Opentrons 96 Filter Tip Rack 200 µL</a>
    </li>
  </ul>

protocol_setup:
  - question: "1"
    label: " number of samples + controls (1-96) "
    key_value: "num_samples"
    type: "number"
    step: "1"
  - question: "2"
    label: " magnetic engage height (in mm) "
    key_value: "mag_height"
    type: "number"
    step: "any"
  - question: "3"
    label: " height offset from bottom of deepwell plate (in mm) "
    key_value: "magplate_offset"
    type: "number"
    step: "any"
  - question: "4"
    label: " lateral offset (as fraction of deepwell radius) "
    key_value: "radial_offset"
    type: "number"
    step: "any"
  - question: "5"
    label: " intitial volume (sample + lysis buffer, in ul) "
    key_value: "starting_vol"
    type: "number"
    step: "any"
  - question: "6"
    label: " binding buffer volume (in ul) "
    key_value: "binding_buffer_vol"
    type: "number"
    step: "any"
  - question: "7"
    label: " wash 1 volume (in ul, up to 500ul) "
    key_value: "wash1_vol"
    type: "number"
    step: "any"
  - question: "8"
    label: " wash 2 volume (in ul, up to 500ul) "
    key_value: "wash2_vol"
    type: "number"
    step: "any"
  - question: "9"
    label: " wash 3 volume (in ul, up to 500ul) "
    key_value: "wash3_vol"
    type: "number"
    step: "any"
  - question: "10"
    label: " final elution volume (in ul) "
    key_value: "elution_vol"
    type: "number"
    step: "any"
  - question: "11"
    label: " mix repetitions for bead resuspension "
    key_value: "mix_reps"
    type: "number"
    step: "1"
  - question: "12"
    label: " bead settling time (in minutes) "
    key_value: "settling_time"
    type: "number"
    step: "any"
  - question: "13"
    label: " park tips "
    type: "selector"
    key_value: "park_tips"
    option_values: 
      - text: "yes" 
        value: "true"
      - text: "no"
        value: "false"
  - question: "14"
    label: " track tips across protocol runs "
    type: "selector"
    key_value: "tip_track"
    option_values: 
      - text: "yes" 
        value: "true"
      - text: "no"
        value: "false"
  - question: "15"
    label: " flash robot on pause "
    type: "selector"
    key_value: "flash"
    option_values: 
      - text: "yes" 
        value: "true"
      - text: "no"
        value: "false"

process_steps: |
  <li>Select your protocol parameters.</li>
  <li>Download your protocol.</li>
  <li>Upload your protocol into the <a href="https://opentrons.com/ot-app">OT App</a>. </li>
  <li>Set up your deck according to the deck map.</li>
  <li>Calibrate your labware, tiprack and pipette using the OT App. For calibration tips, check out our <a href="https://support.opentrons.com/ot-2/getting-started-software-setup/deck-calibration">support article</a>. </li>
  <li>Hit "Run".</li>

additional_notes: |
  <p>If you have any questions about this protocol, please contact the Protocol Development Team by filling out the <a href="https://protocol-troubleshooting.paperform.co/">Troubleshooting Survey</a>. </p>
  
---
