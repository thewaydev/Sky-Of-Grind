GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('dimensionalmatter')
        .category('drack')
        .setEUIO('in')
        .setMaxIOSize(4, 2, 1, 2)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('dimensional_matter_extractor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeType('dimensionalmatter')
        .appearanceBlock(GTBlocks.MACHINE_CASING_HV)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('###########################', '###########################', '###########################', '#############Z#############', '###########CCCCC###########', '###########################', '###########################', '###########################', '###########################', '###########################', '###########CCCCC###########', '#############Z#############', '###########################', '###########################', )
            .aisle('#############B#############', '#############Z#############', '#############Z#############', '###########HHHHH###########', '########CCCZZZZZCCC########', '###########HHHHH###########', '############EEE############', '############E#E############', '############EEE############', '###########HHHHH###########', '########CCCZZZZZCCC########', '###########HHHHH###########', '#############Z#############', '#############Z#############', )
            .aisle('#############B#############', '###########################', '###########################', '########HHH##Z##HHH########', '######CCZZZCCCCCZZZCC######', '########HHH#####HHH########', '#######P###########P#######', '###########################', '###########################', '########HHH#####HHH########', '######CCZZZCCCCCZZZCC######', '########HHH##Z##HHH########', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '######HH###########HH######', '#####CZZCCC#####CCCZZC#####', '######HH###########HH######', '###########################', '###########################', '###########################', '######HH###########HH######', '#####CZZCCC#####CCCZZC#####', '######HH###########HH######', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '#####H###############H#####', '####CZCC###########CCZC####', '#####H###############H#####', '###########################', '###########################', '###########################', '#####H###############H#####', '####CZCC###########CCZC####', '#####H###############H#####', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '####H#################H####', '###CZC###############CZC###', '####H#################H####', '####P#################P####', '###########################', '###########################', '####H#################H####', '###CZC###############CZC###', '####H#################H####', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '##H#####################H##', '#CZC###################CZC#', '##H#####################H##', '###########################', '###########################', '###########################', '##H#####################H##', '#CZC###################CZC#', '##H#####################H##', '###########################', '#############B#############', )
            .aisle('#############Z#############', '###########ZZZZZ###########', '###########AAAAA###########', '##H########AAAAA########H##', '#CZC#######AAAAA#######CZC#', '##H########AAAAA########H##', '###########AAAAA###########', '###########AAAAA###########', '###########AAAAA###########', '##H########AAAAA########H##', '#CZC#######AAAAA#######CZC#', '##H########AAAAA########H##', '###########AAAAA###########', '###########ZZZZZ###########', )
            .aisle('###########################', '##########ZAABAAZ##########', '##########B#####B##########', '##H#######B#####B#######H##', '#CZC######B#####B######CZC#', '##H#######B#####B#######H##', '##########B#####B##########', '##########B#####B##########', '##########B#####B##########', '##H#######B#####B#######H##', '#CZC######B#####B######CZC#', '##H#######B#####B#######H##', '##########B#####B##########', '##########ZAABAAZ##########', )
            .aisle('###########################', '#########ZAAABAAAZ#########', '#########A#######A#########', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#########A#######A#########', '#########A#######A#########', '#########A#######A#########', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#########A#######A#########', '#########ZAAABAAAZ#########', )
            .aisle('###########################', '#########ZAAABAAAZ#########', '#########A##EEE##A#########', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#E#######A##LLL##A#######E#', '#E#######A##LLL##A#######E#', '#E#######A##LLL##A#######E#', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#########A##EEE##A#########', '#########ZAAABAAAZ#########', )
            .aisle('#BBBBBBBBZ#######ZBBBBBBBB#', '#Z#######ZBBBZBBBZ#######Z#', '#Z#######A##E#E##A#######Z#', 'ZHZ######A#######A######ZHZ', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#E#######A##LLL##A#######E#', '#########A##LYL##A#########', '#E#######A##LLL##A#######E#', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', 'ZHZ######A#######A######ZHZ', '#Z#######A##E#E##A#######Z#', '#ZBBBBBBBZBBBZBBBZBBBBBBBZ#', )
            .aisle('###########################', '#########ZAAABAAAZ#########', '#########A##EEE##A#########', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#E#######A##LLL##A#######E#', '#E#######A##LLL##A#######E#', '#E#######A##LLL##A#######E#', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#########A##EEE##A#########', '#########ZAAABAAAZ#########', )
            .aisle('###########################', '#########ZAAABAAAZ#########', '#########A#######A#########', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#########A#######A#########', '#########A#######A#########', '#########A#######A#########', '#H#######A#######A#######H#', 'CZC######A#######A######CZC', '#H#######A#######A#######H#', '#########A#######A#########', '#########ZAAABAAAZ#########', )
            .aisle('###########################', '##########ZAABAAZ##########', '##########B#####B##########', '##H#######B#####B#######H##', '#CZC######B#####B######CZC#', '##H#######B#####B#######H##', '##########B#####B##########', '##########B#####B##########', '##########B#####B##########', '##H#######B#####B#######H##', '#CZC######B#####B######CZC#', '##H#######B#####B#######H##', '##########B#####B##########', '##########ZAABAAZ##########', )
            .aisle('#############Z#############', '###########ZZZZZ###########', '###########AAAAA###########', '##H########AAAAA########H##', '#CZC#######AAAAA#######CZC#', '##H########AAAAA########H##', '###########AAAAA###########', '###########AAAAA###########', '###########AAAAA###########', '##H########AAAAA########H##', '#CZC#######AAAAA#######CZC#', '##H########AAAAA########H##', '###########AAAAA###########', '###########ZZZZZ###########', )
            .aisle('#############B#############', '###########################', '###########################', '##H#####################H##', '#CZC###################CZC#', '##H#####################H##', '###########################', '###########################', '###########################', '##H#####################H##', '#CZC###################CZC#', '##H#####################H##', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '###########################', '###########################', '###H###################H###', '##CZC#################CZC##', '###H###################H###', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '####H#################H####', '###CZC###############CZC###', '####H#################H####', '####P#################P####', '###########################', '###########################', '####H#################H####', '###CZC###############CZC###', '####H#################H####', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '#####H###############H#####', '####CZCC###########CCZC####', '#####H###############H#####', '###########################', '###########################', '###########################', '#####H###############H#####', '####CZCC###########CCZC####', '#####H###############H#####', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '######HH###########HH######', '#####CZZCCC#####CCCZZC#####', '######HH###########HH######', '###########################', '###########################', '###########################', '######HH###########HH######', '#####CZZCCC#####CCCZZC#####', '######HH###########HH######', '###########################', '#############B#############', )
            .aisle('#############B#############', '###########################', '###########################', '########HHH##Z##HHH########', '######CCZZZCCCCCZZZCC######', '########HHH#####HHH########', '#######P###########P#######', '###########################', '###########################', '########HHH#####HHH########', '######CCZZZCCCCCZZZCC######', '########HHH##Z##HHH########', '###########################', '#############B#############', )
            .aisle('#############B#############', '#############Z#############', '#############Z#############', '###########HHHHH###########', '########CCCZZZZZCCC########', '###########HHHHH###########', '############EEE############', '############E#E############', '############EEE############', '###########HHHHH###########', '########CCCZZZZZCCC########', '###########HHHHH###########', '#############Z#############', '#############Z#############', )
            .aisle('###########################', '###########################', '###########################', '#############Z#############', '###########COKNC###########', '###########################', '###########################', '###########################', '###########################', '###########################', '###########CCCCC###########', '#############Z#############', '###########################', '###########################', )
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('ae2:spatial_pylon'))
            .where('V',
                 Predicates.blocks('gtceu:naquadah_coil_block')
                   .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                
                )
            .where('Z', Predicates.blocks('gtceu:electrolytic_cell'))
            .where('A', Predicates.blocks('gtceu:fusion_glass'))
            .where('E', Predicates.blocks('draconicevolution:energy_core_stabilizer'))
            .where('H', Predicates.blocks('gtceu:assembly_line_grating'))
            .where('C', Predicates.blocks('gtceu:atomic_casing'))
            .where('L', Predicates.blocks('draconicevolution:particle_generator'))
            .where('Y', Predicates.blocks('gtceu:uhv_ultimate_battery'))
            .where('P', Predicates.blocks('bloodmagic:demonpylon'))
            .where(
                "C",
                Predicates.blocks('gtceu:atomic_casing').setMinGlobalLimited(155)
                  .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            )
            .where('O', Predicates.abilities(PartAbility.MUFFLER)
                .setExactLimit(1)
            )
            .where('N', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing", 'gtceu:block/multiblock/generator/large_plasma_turbine', true)
})