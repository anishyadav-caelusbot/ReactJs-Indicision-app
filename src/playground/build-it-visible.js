class VisibilityToggle extends React.Component {
constructor(props){
    super(props);
this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state ={ 
        visibility: false
    };
}
    handleToggleVisibility  () {
        this.setState((prevState ) => {
            return{
                visibility: !prevState.visibility
            };
        });
    }
render() {

    return (

        <div>
        <h1>visisbility toggle </h1>
        <button onClick = {this.handleToggleVisibility}>
         {this.state.visibility ? 'On' : 'Off'}</button>
        
        {this.state.visibility&& (
            <div>
            <p> Hey . These are some details you can now see! </p>
        </div>
        
        )}
        
        </div>
        );

}
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));


// let visibility = false;
// const toggleVisibility = () => {


//     visibility = ! visibility;
//     render();
// };





// const render =() =>{

// const jsx = (

// <div>
// <h1>visisbility toggle </h1>
// <button onClick = {toggleVisibility}> {visibility ? 'On' : 'Off'}</button>

// {visibility&& (
//     <div>
//     <p> Hey . These are some details you can now see! </p>
// </div>

// )}

// </div>
// );



// ReactDOM.render(jsx,document.getElementById('app'))

// };


// render();