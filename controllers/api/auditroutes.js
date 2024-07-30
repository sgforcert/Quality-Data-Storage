
const router = require('express').Router();
const { Result } = require('../../models');


router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const auditdata = await Result.create({
            machine_name: req.body.machine_id,
            sample_name: req.body.sample_id,
            sample_day: req.body.sample_date,
            sample_notes: req.body.sample_notes,
            operator_name: req.body.operator_id,
            sample_result: req.body.sample_result
        })

        res.status(200).json(auditdata)

    } catch (err) {
        console.log(err);
    }
})


module.exports = router;
