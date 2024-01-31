const express = require('express')
const router = express.Router();
const {getJobs,CreateJob,updateJob,DeleteJob} = require('../controllers/jobController')
const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect,getJobs).post(protect,CreateJob)
router.route('/:id').patch(protect,updateJob).delete(protect,DeleteJob)



module.exports = router;