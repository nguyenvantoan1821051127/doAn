import * as services from '../services/nguoidung'

export const getNguoiDungs = async (req, res) => {
    console.log(req);
    const { id } = req.NguoiDung
    try {
        const response = await services.getOne(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}