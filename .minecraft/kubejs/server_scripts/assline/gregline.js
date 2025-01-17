
ServerEvents.recipes(event => {

    event.recipes.gtceu.assembly_line('naquadahmk1')
        .itemInputs('3x gtceu:zpm_field_generator', '8x gtceu:resonant_naquadah_spring', '64x gtceu:nether_star_plate', '#gtceu:circuits/uv', '2x gtceu:resonant_naquadah_hex_wire', 'gtceu:luv_fusion_reactor')
        .itemOutputs('gtceu:naquadahreactormk1')
        .inputFluids(
          Fluid.of('gtceu:star_matter', 5950),
          Fluid.of('gtceu:silicone_rubber', 1152),
          Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
          Fluid.of('gtceu:soldering_alloy', 1152),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_boule')).EUt(GTValues.VA[GTValues.UV]).CWUt(16)) // 
        .duration(3000)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembly_line('ae2energy')
        .itemInputs('gtceu:uv_machine_hull', '64x gtceu:advanced_computer_casing', '64x gtceu:computation_receiver_hatch', '64x gtceu:advanced_computer_casing', '64x gtceu:neutron_reflector', '32x gtceu:double_tritanium_plate', '64x gtceu:zpm_parallel_hatch', 'megacells:mega_energy_cell', 'megacells:cell_component_256m')
        .itemOutputs('ae2:creative_energy_cell')
        .inputFluids(
          Fluid.of('gtceu:star_matter', 5950),
          Fluid.of('gtceu:silicone_rubber', 1152),
          Fluid.of('gtceu:styrene_butadiene_rubber', 1152),
          Fluid.of('gtceu:resonant_naquadah', 10152),
        )
        .stationResearch(b => b.researchStack(Item.of('megacells:cell_component_256m')).EUt(GTValues.VA[GTValues.UV]).CWUt(140)) // 
        .duration(30000)
        .EUt(GTValues.VA[GTValues.UV])
    event.recipes.gtceu.assembly_line('uhvmainframe')
        .itemInputs('32x gtceu:advanced_smd_resistor', '8x gtceu:europium_plate', '32x gtceu:advanced_smd_capacitor', '32x gtceu:advanced_smd_transistor', '2x gtceu:highly_advanced_soc', '2x gtceu:tritanium_frame', '2x gtceu:wetware_processor_computer', '32x gtceu:advanced_smd_inductor', 'gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', '32x gtceu:advanced_smd_diode', '32x gtceu:ram_chip', '64x gtceu:polybenzimidazole_foil')
        .itemOutputs('gtceu:wetware_processor_mainframe')
        .inputFluids(
          Fluid.of('gtceu:condensed_star_matter', 5950),
          Fluid.of('gtceu:soldering_alloy', 1152),
          Fluid.of('gtceu:polybenzimidazole', 1152),
        )
        .stationResearch(b => b.researchStack(Item.of('gtceu:wetware_processor_computer')).EUt(GTValues.VA[GTValues.UV]).CWUt(96)) // 
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UV])
event.recipes.gtceu.assembly_line('mattercondenser')
.itemInputs('ae2:controller', '32x gtceu:advanced_smd_capacitor', '32x gtceu:advanced_smd_transistor', '32x gtceu:advanced_smd_inductor', '32x gtceu:advanced_smd_diode', '32x gtceu:ram_chip', '64x gtceu:polybenzimidazole_foil', '#gtceu:circuits/luv')
.itemOutputs('ae2:condenser')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
)
.duration(2000)
.EUt(GTValues.VA[GTValues.IV])        
event.recipes.gtceu.assembly_line('gravitationalfluctuatingmd')
.itemInputs('32x gtceu:advanced_smd_capacitor', '32x gtceu:advanced_smd_transistor', '32x gtceu:advanced_smd_inductor', '32x gtceu:advanced_smd_diode', '32x gtceu:highly_advanced_soc', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '64x gtceu:fine_resonant_essence_wire', '#gtceu:circuits/uhv', '64x gtceu:blacklight')
.itemOutputs('kubejs:gravitational_fluctuation_module')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(2000)
.EUt(GTValues.VA[GTValues.UEV])      




event.recipes.gtceu.assembly_line('qsp')
.itemInputs('gtceu:uv_fusion_reactor', '16x #gtceu:circuits/uhv', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_resonant_essence_wire', 'ae2:creative_energy_cell', 'kubejs:atomically_compressed_black_hole', 'gtceu:uhv_machine_hull')
.itemOutputs('gtceu:quantum_space_projector')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(2000)
.EUt(GTValues.VA[GTValues.UEV])     
.stationResearch(b => b.researchStack(Item.of('gtceu:atomicforge')).EUt(GTValues.VA[GTValues.UV]).CWUt(512)) // 

// A S S   L I N E S

event.recipes.gtceu.assembly_line('component_assembly_line')
.itemInputs('gtceu:assembly_line', '8x #gtceu:circuits/uev', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_cosmic_neutronium_wire', 'ae2:creative_energy_cell', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire', '64x gtceu:fine_cosmic_titanium_wire')
.itemOutputs('gtceu:component_assembly_line')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(500)
.EUt(GTValues.VA[GTValues.UEV])     
event.recipes.gtceu.assembly_line('circuit_assembly_line')
.itemInputs('gtceu:assembly_line', '8x #gtceu:circuits/uev', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_cosmic_neutronium_wire', 'ae2:creative_energy_cell', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire', '64x gtceu:fine_cosmic_tungsten_wire')
.itemOutputs('gtceu:circuit_assembly_line')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(500)
.EUt(GTValues.VA[GTValues.UEV])     


event.recipes.gtceu.assembly_line('quantum_station')
.itemInputs('gtceu:research_station', '8x #gtceu:circuits/uev', '4x avaritia:eternal_singularity', 'gtceu:uhv_ultimate_battery', '64x gtceu:fine_cosmic_neutronium_wire', 'ae2:creative_energy_cell', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '64x gtceu:fine_cosmic_iridium_wire', '4x gtceu:uhv_field_generator')
.itemOutputs('gtceu:quantum_station')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124)
)
.duration(500)
.EUt(GTValues.VA[GTValues.UEV])     

event.recipes.gtceu.assembly_line('h_gim')
.itemInputs('64x kubejs:quantum_casing', '16x gtceu:gravi_star', 'gtceu:uev_machine_hull', '32x gtceu:double_cosmic_tungsten_plate', '4x #gtceu:circuits/uev', '16x gtceu:uev_robot_arm', '16x gtceu:uev_electric_piston', 'kubejs:highly_resonative_soc', 'kubejs:gravitational_fluctuation_module', 'kubejs:quantum_resonant_core', 'gtceu:uev_compressor', '4x gtceu:uhv_field_generator')
.itemOutputs('gtceu:gravitational_implosion_machine')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:condensed_star_matter', 8124),
Fluid.of('gtceu:neutronium', 8124)
)
.duration(1000)
.EUt(GTValues.VA[GTValues.UIV])   
event.recipes.gtceu.assembly_line('xl_plasma_turbine')
.itemInputs('16x gtceu:naquadria_plate', '16x gtceu:quantum_star', 'gtceu:zpm_machine_hull', '32x gtceu:double_naquadah_alloy_plate', '4x #gtceu:circuits/uv', '4x gtceu:zpm_robot_arm', '8x gtceu:zpm_electric_piston', 'gtceu:zpm_compressor', '4x gtceu:iv_field_generator')
.itemOutputs('gtceu:gravitational_implosion_machine')
.inputFluids(
Fluid.of('gtceu:soldering_alloy', 1152),
Fluid.of('gtceu:polybenzimidazole', 1152),
Fluid.of('gtceu:europium', 244)
)
.duration(1000)
.EUt(GTValues.VA[GTValues.UV])   
    })