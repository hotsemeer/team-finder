<template>
  <div class="equipment-grid">
    <div class="Headgear">
      <equipment-slot
        slot-type="Headgear"
        :value="gear.Headgear"
      />
    </div>
    <div class="Body">
      <equipment-slot
        slot-type="Body"
        :value="gear.Body"
      />
    </div>
    <div class="Legs">
      <equipment-slot
        slot-type="Legs"
        :value="gear.Legs"
      />
    </div>
    <div class="Boots">
      <equipment-slot
        slot-type="Boots"
        :value="gear.Boots"
      />
    </div>
    <div class="Gloves">
      <equipment-slot
        slot-type="Gloves"
        :value="gear.Gloves"
      />
    </div>
    <div class="Amulet">
      <equipment-slot
        slot-type="Amulet"
        :value="gear.Amulet"
      />
    </div>
    <div class="Ring">
      <equipment-slot
        slot-type="Ring"
        :value="gear.Ring"
      />
    </div>
    <div class="Back">
      <equipment-slot
        slot-type="Back"
        :value="gear.Back"
      />
    </div>

    <div class="Mainhand">
      <equipment-slot
        slot-type="Mainhand"
        :value="gear.Mainhand"
      />
    </div>
    <div class="Offhand">
      <equipment-slot
        slot-type="Offhand"
        :value="gear.Offhand"
      />
    </div>
  </div>
</template>

<script>
import EquipmentSlot from '@/components/EquipmentSlot'

export default {
  components: {
    EquipmentSlot
  },
  props: {
    gear: Object
  }
}
</script>
