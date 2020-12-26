<template>
  <div :class="$vuetify.breakpoint.mobile ? 'justify-center' : 'row'">
    <div class="equipmentGrid col justify-center">
      <div class="Headgear">
        <equipment-slot
          slot-type="Headgear"
          v-model="gear.Headgear"
          :options="options[combatStyle].Headgear"
        />
      </div>
      <div class="Body">
        <equipment-slot
          slot-type="Body"
          v-model="gear.Body"
          :options="options[combatStyle].Body"
        />
      </div>
      <div class="Legs">
        <equipment-slot
          slot-type="Legs"
          v-model="gear.Legs"
          :options="options[combatStyle].Legs"
        />
      </div>
      <div class="Boots">
        <equipment-slot
          slot-type="Boots"
          v-model="gear.Boots"
          :options="options[combatStyle].Boots"
        />
      </div>
      <div class="Gloves">
        <equipment-slot
          slot-type="Gloves"
          v-model="gear.Gloves"
          :options="options[combatStyle].Gloves"
        />
      </div>
      <div class="Amulet">
        <equipment-slot
          slot-type="Amulet"
          v-model="gear.Amulet"
          :options="options.Amulet"
        />
      </div>
      <div class="Ring">
        <equipment-slot
          slot-type="Ring"
          v-model="gear.Ring"
          :options="options.Ring"
        />
      </div>
      <div class="Back">
        <equipment-slot
          slot-type="Back"
          v-model="gear.Back"
          :options="options[combatStyle].Back"
        />
      </div>

      <div class="Mainhand">
        <equipment-slot
          slot-type="Mainhand"
          v-model="gear.Mainhand"
          :options="options[combatStyle].Mainhand"
        />
      </div>
      <div class="Offhand">
        <equipment-slot
          slot-type="Offhand"
          v-model="gear.Offhand"
          :options="options[combatStyle].Offhand"
        />
      </div>
    </div>

    <div class="col">
      <h4>Perks</h4>
      <div>
        <span>{{ gear.Body }}</span>
      </div>
      <div>
        <span>{{ gear.Legs }}</span>
      </div>
      <div>
        <span>{{ gear.Mainhand }}</span>
      </div>
      <div>
        <span>{{ gear.Offhand }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    combatStyle: String,
  },
  components: {
    EquipmentSlot: () => import("@/components/EquipmentSlot.vue"),
  },
  data() {
    return {
      gear: {
        Headgear: null,
        Body: null,
        Legs: null,
        Boots: null,
        Gloves: null,
        Amulet: null,
        Ring: null,
        Back: null,
        Mainhand: null,
        Offhand: null,
      },
      options: {
        Amulet: [
          "Amulet_of_glory",
          "Amulet_of_fury",
          "Blood_amulet_of_fury",
          "Saradomin's_hiss",
          "Saradomin's_murmur",
          "Saradomin's_whisper",
          "Dragon_Rider_amulet",
          "Reaper_necklace",
          "Amulet_of_souls",
          "Essence_of_Finality_amulet",
        ],
        Ring: [
          "Berserker_ring",
          "Archers'_ring",
          "Seers'_ring",
          "Warrior_ring",
          "Asylum_surgeon's_ring",
          "Ring_of_death",
        ],
        Melee: {
          Headgear: [
            "Melee/Bandos_helmet",
            "Melee/Statius's_full_helm",
            "Melee/Anima_core_helm_of_Zaros",
            "Melee/Torva_full_helm",
            "Melee/Malevolent_helm",
            "Melee/Masterwork_helm",
            "Melee/Custom-fit_trimmed_spiked_masterwork_helm",
          ],
          Body: [
            "Melee/Bandos_chestplate",
            "Melee/Statius's_platebody",
            "Melee/Vesta's_chainbody",
            "Melee/Anima_core_body_of_Zaros",
            "Melee/Torva_platebody",
            "Melee/Malevolent_cuirass",
            "Melee/Masterwork_platebody",
            "Melee/Custom-fit_trimmed_spiked_masterwork_platebody",
          ],
          Legs: [
            "Melee/Bandos_tassets",
            "Melee/Statius's_platelegs",
            "Melee/Vesta's_plateskirt",
            "Melee/Anima_core_legs_of_Zaros",
            "Melee/Torva_platelegs",
            "Melee/Malevolent_greaves",
            "Melee/Masterwork_platelegs",
            "Melee/Custom-fit_trimmed_spiked_masterwork_platelegs",
          ],
          Boots: [
            "Melee/Bandos_boots",
            "Melee/Emberkeen_boots",
            "Melee/Torva_boots",
            "Melee/Laceration_boots",
            "Melee/Masterwork_boots",
            "Melee/Custom-fit_trimmed_spiked_masterwork_boots",
          ],
          Gloves: [
            "Melee/Bandos_gloves",
            "Melee/Torva_gloves",
            "Melee/Gloves_of_passage",
            "Melee/Razorback_gauntlets",
            "Melee/Masterwork_gloves",
            "Melee/Custom-fit_trimmed_spiked_masterwork_gloves",
            "Deathtouch_bracelet",
            "Cinderbane_gloves",
          ],
          Back: [
            "Fire_cape",
            "Max_cape",
            "Completionist_cape",
            "Melee/TokHaar-Kal-Ket",
          ],
          Mainhand: [
            "Melee/Abyssal_whip",
            "Melee/Dharok's_greataxe",
            "Melee/Armadyl_godsword",
            "Melee/Korasi's_sword",
            "Melee/Chaotic_longsword",
            "Melee/Chaotic_maul",
            "Melee/Sunspear_(melee)",
            "Melee/Khopesh_of_the_Kharidian",
            "Melee/Swordy_McSwordFace",
            "Melee/Masuta's_warspear",
            "Melee/Mizuyari",
            "Melee/Elder_rune_longsword_+_5",
            "Melee/Elder_rune_2h_sword_+_5",
            "Melee/Blade_of_Nymora",
            "Melee/Annihilation",
            "Melee/Elite_tetsu_katana",
            "Melee/Dragon_Rider_lance",
            "Melee/Drygore_longsword",
            "Melee/Spear_of_Annihilation",
            "Melee/Noxious_scythe",
            "Melee/Masterwork_Spear_of_Annihilation",
            "Melee/Khopesh_of_Tumeken",
            "Melee/Zaros_godsword",
            "Melee/Terrasaur_maul",
          ],
          Offhand: [
            "Melee/Enhanced_Excalibur",
            "Melee/Jessika's_sword",
            "Melee/Off-hand_chaotic_longsword",
            "Melee/Off-hand_khopesh_of_the_Kharidian",
            "Melee/Elder_rune_off_hand_longsword_+_5",
            "Melee/Blade_of_Avaryss",
            "Melee/Elite_tetsu_wakizashi",
            "Melee/Off-hand_drygore_longsword",
            "Melee/Khopesh_of_Elidinis",
          ],
        },
        Ranged: {
          Headgear: [
            "Ranged/Armadyl_helmet",
            "Ranged/Morrigan's_coif",
            "Ranged/Anima_core_helm_of_Zamorak",
            "Ranged/Pernix_cowl",
            "Ranged/Sirenic_mask",
            "Ranged/Elite_sirenic_mask",
          ],
          Body: [
            "Ranged/Armadyl_chestplate",
            "Ranged/Morrigan's_leather_body",
            "Ranged/Anima_core_body_of_Zamorak",
            "Ranged/Pernix_body",
            "Ranged/Sirenic_hauberk",
            "Ranged/Elite_sirenic_hauberk",
          ],
          Legs: [
            "Ranged/Armadyl_chainskirt",
            "Ranged/Morrigan's_leather_chaps",
            "Ranged/Anima_core_legs_of_Zamorak",
            "Ranged/Pernix_chaps",
            "Ranged/Sirenic_chaps",
            "Ranged/Elite_sirenic_chaps",
          ],
          Boots: [
            "Ranged/Armadyl_boots",
            "Ranged/Pernix_boots",
            "Ranged/Elite_ranger_boots",
            "Ranged/Flarefrost_boots",
          ],
          Gloves: [
            "Ranged/Armadyl_gloves",
            "Ranged/Pernix_gloves",
            "Ranged/Ascension_grips",
            "Cinderbane_gloves",
            "Deathtouch_bracelet",
            "Ranged/Nightmare_gauntlets",
          ],
          Back: [
            "Ranged/Ava's_alerter",
            "Fire_cape",
            "Max_cape",
            "Completionist_cape",
            "Ranged/TokHaar-Kal-Xil",
          ],
          Mainhand: [
            "Ranged/Karil's_crossbow",
            "Ranged/Karil's_pistol_crossbow",
            "Ranged/Armadyl_crossbow",
            "Ranged/Royal_crossbow",
            "Ranged/Attuned_crystal_bow",
            "Ranged/Zaryte_bow",
            "Ranged/Chaotic_crossbow",
            "Ranged/Decimation",
            "Ranged/Wyvern_crossbow",
            "Ranged/Noxious_longbow",
            "Ranged/Ascension_crossbow",
            "Ranged/Seren_godbow",
            "Ranged/Blightbound_crossbow",
            "Ranged/Eldritch_crossbow",
            "Ranged/Hexhunter_bow",
          ],
          Offhand: [
            "Ranged/Karil's_off-hand_pistol_crossbow",
            "Ranged/Off-hand_Armadyl_crossbow",
            "Ranged/Off-hand_chaotic_crossbow",
            "Ranged/Off-hand_ascension_crossbow",
            "Ranged/Off-hand_Blightbound_crossbow",
          ],
        },
        Magic: {
          Headgear: [
            "Magic/Hood_of_subjugation",
            "Magic/Zuriel's_hood",
            "Magic/Anima_core_helm_of_Seren",
            "Magic/Virtus_mask",
            "Magic/Tectonic_mask",
            "Magic/Elite_tectonic_mask",
          ],
          Body: [
            "Magic/Garb_of_subjugation",
            "Magic/Zuriel's_robe_top",
            "Magic/Anima_core_body_of_Seren",
            "Magic/Virtus_robe_top",
            "Magic/Tectonic_robe_top",
            "Magic/Elite_tectonic_robe_top",
          ],
          Legs: [
            "Magic/Gown_of_subjugation",
            "Magic/Zuriel's_robe_bottom",
            "Magic/Anima_core_legs_of_Seren",
            "Magic/Virtus_robe_legs",
            "Magic/Tectonic_robe_bottom",
            "Magic/Elite_tectonic_robe_bottom",
          ],
          Boots: [
            "Magic/Boots_of_subjugation",
            "Magic/Virtus_boots",
            "Magic/Hailfire_boots",
            "Magic/Blast_diffusion_boots",
          ],
          Gloves: [
            "Magic/Gloves_of_subjugation",
            "Magic/Virtus_gloves",
            "Magic/Celestial_handwraps",
            "Deathtouch_bracelet",
            "Cinderbane_gloves",
          ],
          Back: [
            "Magic/Zamorak_cape",
            "Fire_cape",
            "Max_cape",
            "Completionist_cape",
            "Magic/TokHaar-Kal-Mej",
          ],
          Mainhand: [
            "Magic/Abyssal_wand",
            "Magic/Ahrim's_staff",
            "Magic/Ahrim's_wand",
            "Magic/Armadyl_battlestaff",
            "Magic/Attuned_crystal_staff",
            "Magic/Attuned_crystal_wand",
            "Magic/Camel_staff",
            "Magic/Chaotic_staff",
            "Magic/Elite_seasinger_kiba",
            "Magic/Inquisitor_staff",
            "Magic/Noxious_staff",
            "Magic/Obliteration",
            "Magic/Seismic_wand",
            "Magic/Staff_of_darkness",
            "Magic/Staff_of_light",
            "Magic/Staff_of_Sliske",
            "Magic/Sunspear_(magic)",
            "Magic/Vanquish_(magic)",
            "Magic/Virtus_wand",
            "Magic/Wand_of_the_Cywir_elders",
            "Magic/Wand_of_the_praesul",
            "Magic/Zuriel's_staff",
          ],
          Offhand: [
            "Magic/Abyssal_orb",
            "Magic/Ahrim's_book_of_magic",
            "Magic/Attuned_crystal_orb",
            "Magic/Elite_seasinger_makigai",
            "Magic/Imperium_core",
            "Magic/Orb_of_the_Cywir_elders",
            "Magic/Seismic_singularity",
            "Magic/Virtus_book",
          ],
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.equipmentGrid {
  display: grid;
  grid-template-rows: repeat(5, 50px);
  grid-template-columns: repeat(3, 50px);
  column-gap: 30px;
  row-gap: 10px;

  > * {
    box-shadow: inset 1em 1em 1em #1e1e1e;
  }

  .Headgear {
    grid-row: 1;
    grid-column: 2;
  }

  .Amulet {
    grid-row: 2;
    grid-column: 2;
  }

  .Body {
    grid-row: 3;
    grid-column: 2;
  }

  .Legs {
    grid-row: 4;
    grid-column: 2;
  }

  .Boots {
    grid-row: 5;
    grid-column: 2;
  }

  .Gloves {
    grid-row: 5;
    grid-column: 1;
  }

  .Ring {
    grid-row: 5;
    grid-column: 3;
  }

  .Back {
    grid-row: 2;
    grid-column: 1;
  }
  .Mainhand {
    grid-row: 3;
    grid-column: 1;
  }

  .Offhand {
    grid-row: 3;
    grid-column: 3;
  }
}

@media only screen and (max-width: #{map-get($grid-breakpoints, 'sm')}) {
  .equipmentGrid {
    grid-template-columns: repeat(2, 50px);

    .Offhand {
      grid-row: 4;
      grid-column: 1;
    }

    .Ring {
      grid-row: 1;
      grid-column: 1;
    }
  }
}
</style>
