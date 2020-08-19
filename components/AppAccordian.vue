<template id="accordion">
  <ul>
    <li v-for="item in items" :key="item.id" @click="openItem(item)">
      <div class="arrow_box" :class="{'arrow_box--open' : item.isopen}"></div>
      {{item.title}}
      <transition v-on:enter="enter" v-on:leave="leave">
        <div v-show="item.isopen" class="item">
           {{item.content}}
        </div>  
      </transition>
    </li>
  </ul>
</template>

<script>

export default {
  props: ['items'],

  data() {
    return {
    };
  },
 methods: {
    openItem: function(item){
        item.isopen = !  item.isopen
    },
    
    setClass: function(item){
        if (item.isopen == true ) {
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
li {
  list-style:none;
  cursor:pointer;
  font: 22px/48px 'Cantata One', serif;
}
li>div {
  font: 14px/22px 'Noto Sans', serif;
  padding-bottom:20px;
}

.item {
  overflow:hidden;
  width:600px;
}

.arrow_box {
  width:10px;
  height:10px;
  transition: all .3s;
  padding-bottom:0px;
  position:absolute;
  margin:20px 0px 0px -15px;
  
}


.arrow_box:after, .arrow_box:before {
	border: solid transparent;
	content: " ";
	position: absolute;
}

.arrow_box:after {
	border-width: 5px;
}
.arrow_box:before {
	border-left-color: #000;
	border-width: 5px;
}

.arrow_box--open{
   transform: rotateZ(90deg);
   transform-origin: 50% 50%;
}
</style>