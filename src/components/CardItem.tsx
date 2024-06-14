import frutaIcon from '/fruta.svg'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function CardItem(){
    return(
        <div className='flex justify-between items-center w-[90%] mx-auto border border-gray-700 rounded-md p-4 '>
            <input type="checkbox" />

            <div>
                <h3>Maça</h3>
                <p className='text-sm'>2 unidades</p>
            </div>

            <figure>
                <img src={frutaIcon} alt="" />
            </figure>

            <DeleteOutlineOutlinedIcon/>
        </div>
    )
}