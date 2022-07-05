
const Checkbox  = ({children, className, ...props}: React.ComponentProps<'input'>) => {
    const classes = `todo-list-button ${className}`
    return (
        <input type="checkbox" className={classes} {...props}>{children}</input>
    )
}

export default Checkbox