<template>
  <aside>
    <div class="sidearea">
      <div class="filter" @click="openItem()" :class="{'filter--open' : isopen}"> filters here - <span :class="{'arrow_box--open' : isopen}"></span></div>
     
    <transition v-on:enter="enter" v-on:leave="leave">
           <div v-if="isopen">
      <label for="usedamounts">Most used: <span>{{ usedamounts }}</span></label>
      <input 
        class="slider" 
        id="usedamounts" 
        type="range"
        :value="usedamounts"  
        :min="min" 
        :max="max" 
        step="0.1" 
        @input="$emit('update:usedamounts', $event.target.value)"
      />
      <span class="min">{{ min }}</span>
      <span class="max">{{ max }}</span>
    
    <app-switch v-if="!newtype" />
    <div class="sidearea callout">
      <h4>Special !</h4>
      <p>New interactiveiframe coming to GMAIL Email Templates.</p>
      <p>
      <em>Coming soon..... Live mobile view portal.</em></p>
    </div>
    <div class="sidearea callout">
     <ul class="sidebar-list">
          <nuxt-link to="/OUTorah"><li>OU Torah</li></nuxt-link>
          <nuxt-link to="/shabbatshalom"><li>Shabbat Shalom</li></nuxt-link> 
          <nuxt-link to="/OuPress"><li>OU Press</li></nuxt-link>
          <nuxt-link to="/OuJob"><li>Job Board</li></nuxt-link>
          <nuxt-link to="/Community"><li>Community Engagement</li></nuxt-link>
          <nuxt-link to="/Yachad"><li>Yachad</li></nuxt-link>
          <nuxt-link to="/NCSY"><li>NCSY</li></nuxt-link>
          <nuxt-link to="/Kosher"><li>Kosher</li></nuxt-link>
          <nuxt-link to="/IPA"><li>IPA</li></nuxt-link>
          <nuxt-link to="/JewishAction"><li>Jewish Action</li></nuxt-link>
          <nuxt-link to="/ifs"><li>Israel Free Spirit</li></nuxt-link>
          <nuxt-link to="/BoardAlerts"><li>Board Newsletters</li></nuxt-link>
          <nuxt-link to="/OUIsrael"><li>OU Israel</li></nuxt-link>
          <nuxt-link to="/RabbiWienrebs"><li>Rabbi Weinrebs</li></nuxt-link>
          <nuxt-link to="/OUGeneral"><li>OU General</li></nuxt-link>
          <nuxt-link to="/TeamYachad"><li>Team Yachad</li></nuxt-link>
          <nuxt-link to="/ArnoldGerson"><li>Arnold Gerson</li></nuxt-link>
          <nuxt-link to="/NextGen"><li>NextGen</li></nuxt-link>
          <nuxt-link to="/new"><li>New</li></nuxt-link>
     </ul>
    </div>
        </div>
    </transition>

    
    </div>
  </aside>
</template>

<script>
import AppSwitch from './AppSwitch.vue';

export default {
  props: {
    newtype: {
      type: Boolean,
      default: false
    },
    usedamounts: {
      type: [Number, String],
      default: 300
    }
  },
  data() {
    return {
      min: 0,
      max: 400,
      isopen: false    
    };
  },
  components: {
    AppSwitch
  },
  methods: {
      openItem: function(){
        this.isopen = !  this.isopen
    }, 
    setClass: function(item){
        if (item == true ) {
          return 'open'
        }
        return 'close'
    },
enter: function(el, done){   
        Velocity(el, 'slideDown', {duration: 400,  
                                   easing: "easeInBack"},
                                  {complete: done})
    },
    
    leave: function(el, done){
        Velocity(el, 'slideUp', {duration: 400,  
                                 easing: "easeInBack"},
                                {complete: done})
    },    
  }
};
</script>

<style lang="scss" scoped>
aside {
  background: white;
  float: left;
  padding: 20px;
}

.sidearea {
  border-bottom: 1px solid #ccc;
  &:last-of-type {
    border: none;
  }
}

.callout {
  padding: 20px 0;
  h4 {
    padding-bottom: 10px;
  }
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

/*--input range--*/
.sidearea:first-of-type {
  padding-bottom: 40px;
}

label {
  font-family: 'Playfair Display', serif;
  padding: 15px 0;
  text-align: center;
}

span {
  font-family: 'Barlow', sans-serif;
}

.max {
  font-size: 12px;
  float: right;
  color: #565656;
}

.min {
  float: left;
  font-size: 12px;
  color: #565656;
}

ul.sidebar-list a {
    text-decoration: none;
    padding-bottom: 10px;
    display: block;
}
.filter{
  font-size: 20px;
}
.filter--open{
    margin-bottom: 10px;

}
</style>