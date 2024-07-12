import React from 'react'

const City = ( {city} ) => {
  return (
<div className='mt-5 flex justify-center'>
    <table className='table-auto border-collapse border border-gray-300'>
        <thead>
            <tr>
                <th className='border border-gray-300 px-4 py-2'>Özellik</th>
                <th className='border border-gray-300 px-4 py-2'>Değer</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='border border-gray-300 px-4 py-2'>Şehir Adı</td>
                <td className='border border-gray-300 px-4 py-2'>{city?.name}</td>
            </tr>
            <tr>
                <td className='border border-gray-300 px-4 py-2'>Sıcaklık</td>
                <td className='border border-gray-300 px-4 py-2'>{city?.main.temp}°C</td>
            </tr>
            <tr>
                <td className='border border-gray-300 px-4 py-2'>Hava Durumu</td>
                <td className='border border-gray-300 px-4 py-2'>{city?.weather[0].main}</td>
            </tr>
        </tbody>
    </table>
</div>




  );
}

export default City