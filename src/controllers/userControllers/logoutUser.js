export const logoutUser =  (req, res) => {
    res.cookie('token', '')
    return res.status(200).json({ message: '¡Cerraste sesion exitosamente!' })
}