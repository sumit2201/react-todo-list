const Button  = ({children, className, ...props}: React.ComponentProps<'button'>) => {
    const classes = `todo-list-button ${className}`
    return (
        <button className={classes} {...props}>{children}</button>
    )
}

export default Button