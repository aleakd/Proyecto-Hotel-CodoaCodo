function validacion() 
{
    indice = document.getElementById("opciones").selectedIndex;
    
    if( indice === 0 || indice == null) 
    {
        document.getElementById('mensaje').innerHTML = "Tenes que seleccionar un pais!";
        return false;
    }

    document.getElementById('mensaje').innerHTML = ""; 
    return true;
              
}