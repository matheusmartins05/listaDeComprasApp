import IItem from '../interfaces/IItem';
import frutaIcon from '/fruta.svg'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function CardItem({nome, quantidade, unidadeDeMedida} : IItem){
    return(
        <div className='flex justify-between items-center w-[90%] mx-auto border border-gray-700 rounded-md p-4 '>
            <input type="checkbox" />

            <div>
                <h3>{nome}</h3>
                <p className='text-sm'>{quantidade} {unidadeDeMedida}</p>
            </div>

            <figure>
                <img src={frutaIcon} alt="" />
            </figure>

            <DeleteOutlineOutlinedIcon/>
        </div>
    )
}