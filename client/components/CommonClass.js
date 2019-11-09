export default (Component)=>{
    return class Common extends Component{
                    toggleNavigationView = (parent, fixed, toggle)=>{
                         let parentEle = document.getElementById(parent);
                          parentEle.onclick = function(e){
                               if(e.target.classList.contains(fixed)){
                                     for(let x of parentEle.getElementsByClassName(fixed))
                                     x.classList.remove(toggle);
                                 e.target.classList.toggle(toggle);
                               }
                          }
                     }
    }
}
