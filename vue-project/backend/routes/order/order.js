var express = require('express');
var router = express.Router();

/* GET order listing. */
const orders = [
    {
      projectNo: '202211121700',
      status: 'process',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'finished',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'finished',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'process',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
      deadline: '2022/12/24',
      manager: 'Smith'
    },
    {
      projectNo: '202211121700',
      status: 'inquiry',
      customer: 'amcd',
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
        //単一検索
        res.send('Order id respond with a resource ' + req.query.id);
    }
    
  });

module.exports = router;