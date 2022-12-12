import DashboardLayout from "./dashboardLayout"
const Layouts = (Component,layoutName) => (props)=>{
    return (<DashboardLayout pageContent={<Component {...props}/>}/> )
}
export default Layouts;