'use strict'
const Siswa = use('App/Models/Siswa')

class SiswaController {
    async index({ response }){
        const data = await Siswa.all()
        return response.json(data)
    }

    async show({ params, response }){
        const data = await Siswa.find(params.id)
        return response.json(data)
    }

    async update({ params, request, response }){
        const dataInfo = request.only(['NIS', 'Nama', 'Kelas', 'NoHP'])
        const data = await Siswa.find(params.id)
        if (!data){
            return response.status(404).json({data: 'Resource not found'})
        }
        data.nis = dataInfo.NIS
        data.nama = dataInfo.Nama
        data.kelas = dataInfo.Kelas
        data.nohp = dataInfo.NoHP

        await data.save()
        return response.status(200).json({data: 'Data berhasil terupdate'})
    }

    async delete({ params, response }){
        const data = await Siswa.find(params.id)
        if (!data){
            return response.status(404).json({data: 'Resource not found'})
        }
        await data.delete()
        return response.status(200).json({data: 'Data berhasil dihapus'})
    }

    async store({ request, response }){
        const data = {
            nis : request.input('NIS'),
            nama : request.input('Nama'),
            kelas : request.input('Kelas'),
            nohp : request.input('NoHP')
        }
        const insert = Siswa.create(data)
        if(insert){
            return response.json({ Sukses : 'Data berhasil disimpan' })
        }else{
            return response.json({ Gagal : 'Data gagal disimpan' })
        }
    }
}

module.exports = SiswaController
