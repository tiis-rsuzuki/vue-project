var express = require('express');
var router = express.Router();

/* GET order listing. */
const orders = [
    {
      projectNo: '202211121700',
      status: 1,
      customer: 'SALES',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121701',
      status: 2,
      customer: 'SALES',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121702',
      status: 3,
      customer: 'SALES',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121703',
      status: 2,
      customer: 'DESIGN',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121704',
      status: 1,
      customer: 'PRODUCTION',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121705',
      status: 2,
      customer: 'DESIGN',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121706',
      status: 1,
      customer: 'DESIGN',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121707',
      status: 1,
      customer: 'PRODUCTION',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121708',
      status: 2,
      customer: 'DESIGN',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121709',
      status: 2,
      customer: 'DESIGN',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121710',
      status: 2,
      customer: 'PRODUCTION',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121711',
      status: 2,
      customer: 'DESIGN',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
  ]

router.get('/', function(req, res, next) {
    if(req.query.id == null){
        //一覧検索
        // res.send('Order List respond with a resource');
        res.json(orders)
    }else{
        let order = orders.find(order => order.projectNo == req.query.id);
        console.log(order);
        res.json(order)
    }
    
  });

module.exports = router;