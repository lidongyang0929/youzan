import Address from 'js/addressService.js'


export default{
    data(){
        return {
            name:'',
            tel:'',
            provinceValue:-1,
            cityValue:-1,
            districtValue:-1,
            address:'',
            type:this.$route.query.type,
            instance:this.$route.query.instance,
            addressData:require('js/address.json'),
            cityList:null,
            districtList:null,
            id:''
            
        }
    },
    methods:{
        add(){
            let {name, tel, provinceValue, cityValue, districtValue, address} = this
            let data = {name, tel, provinceValue, cityValue, districtValue, address}
            if(this.type === 'add'){
               this.$store.dispatch('addAction',data)
            }
            if(this.type === 'edit'){
               this.$store.dispatch('updateAction',data) 
            }
            
        },
        remove(){
            if(window.confirm('确认删除?')){
                this.$store.dispatch('removeAction',this.id)   
            } 
        }
    },
    created(){
        if(this.type==='edit'){
            let address = this.instance
            this.provinceValue = parseInt(address.provinceValue)
            this.name=address.name
            this.tel=address.tel
            this.adderss = address.address
            this.id = address.id
        }
    },
    watch:{
        lists(){
          this.$router.go(-1)
        },
        provinceValue(val){
            if (val === -1) return
            let list = this.addressData.list
            let index = list.findIndex(item=>{
                 return item.value === val
            })
         this.cityList = list[index].children
         this.cityValue = -1
         this.districtvalue = -1
         if(this.type === 'edit'){
             this.cityValue = parseInt(this.instance.cityValue)
         }
        },
        cityValue(val) {
            if(val === -1) return
            let index = this.cityList.findIndex(item => {
              return item.value === val
            })
            this.districtList = this.cityList[index].children
            this.districtValue = -1
            if(this.tyep==="edit"){
                this.districtValue = parseInt(this.instance.districtValue)
            }
        }
    },
    computed:{
        lists(){
            return this.$store.state.lists
        }
    }
}