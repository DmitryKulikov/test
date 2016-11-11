app.filter("myfilter", function($filter) {
      return function(items, from, to) {
            return $filter('filter')(items, "rentEndDate", function(v){
              var date  = moment(v);
              return date >= moment(from) && date <= moment(to);
            });
      };
    });
