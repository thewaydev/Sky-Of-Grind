GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('csr')
        .category('generator')
        .setEUIO('out')
        .setMaxIOSize(1, 1, 0, 0)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.REPLICATOR)
})





GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('chaotic_singularity_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .generator(true)
        .recipeType('csr')
        .noRecipeModifier()
        .appearanceBlock(() => Block.getBlock('kubejs:highly_reinforced_radioactive_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('####CCC####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '####CCC####', )
            .aisle('##CCCCCCC##', '####B#B####', '####B#B####', '###########', '###########', '###########', '###########', '###########', '####B#B####', '####B#B####', '##CCCCCCC##', )
            .aisle('#CCCCCCCCC#', '##B#####B##', '##B#####B##', '##B#####B##', '##B#####B##', '##B#BBB#B##', '##B#####B##', '##B#####B##', '##B#####B##', '##B#####B##', '#CCCCCCCCC#', )
            .aisle('#CCCCCCCCC#', '####BBB####', '####AAA####', '####AAA####', '####AAA####', '###BAAAB###', '####AAA####', '####AAA####', '####AAA####', '####BBB####', '#CCCCCCCCC#', )
            .aisle('CCCCCCCCCCC', '#B#B###B#B#', '#B#A###A#B#', '###A###A###', '###A###A###', '##BA###AB##', '###A###A###', '###A###A###', '#B#A###A#B#', '#B#B###B#B#', 'CCCCCCCCCCC', )
            .aisle('CCCCCCCCCCC', '###B###B###', '###A###A###', '###A###A###', '###A###A###', '##BA###AB##', '###A###A###', '###A###A###', '###A###A###', '###B###B###', 'CCCCCYCCCCC', )
            .aisle('CCCCCCCCCCC', '#B#B###B#B#', '#B#A###A#B#', '###A###A###', '###A###A###', '##BA###AB##', '###A###A###', '###A###A###', '#B#A###A#B#', '#B#B###B#B#', 'CCCCCCCCCCC', )
            .aisle('#CCCCCCCCC#', '####BBB####', '####AAA####', '####AAA####', '####AAA####', '###BAAAB###', '####AAA####', '####AAA####', '####AAA####', '####BBB####', '#CCCCCCCCC#', )
            .aisle('#CCCCCCCCC#', '##B#####B##', '##B#####B##', '##B#####B##', '##B#####B##', '##B#BBB#B##', '##B#####B##', '##B#####B##', '##B#####B##', '##B#####B##', '#CCCCCCCCC#', )
            .aisle('##CCCCCCC##', '####B#B####', '####B#B####', '###########', '###########', '###########', '###########', '###########', '####B#B####', '####B#B####', '##CCCCCCC##', )
            .aisle('####CKC####', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '###########', '####CCC####', )
            .where('K', Predicates.controller(Predicates.blocks(definition.get())))
            .where('Y', Predicates.abilities(PartAbility.OUTPUT_ENERGY)
            .or(Predicates.abilities(PartAbility.SUBSTATION_OUTPUT_ENERGY))
            .or(Predicates.abilities(PartAbility.OUTPUT_LASER))
            )
            .where('A', Predicates.blocks('gtceu:chaos_block'))
            .where('B', Predicates.blocks('kubejs:stellar_powered_casing'))
            .where("C", Predicates.blocks('kubejs:highly_reinforced_radioactive_casing')
            .or(Predicates.abilities(PartAbility.EXPORT_ITEMS, PartAbility.IMPORT_ITEMS))
            )
            .where('#', Predicates.any())
            .build()
        )
        .workableCasingRenderer("kubejs:block/casings/highly_reinforced_radioactive_casing", 'gtceu:block/multiblock/generator/large_plasma_turbine', true)
    })