var permute = function(nums) {
  const res = [];
  backtrack([]);
  return res;

  function backtrack(path) {
      if(path.length === nums.length) {
          res.push(path);
          return;
      }

      for (let i = 0; i < nums.length; i++) {
          if (path.includes(nums[i])) { 
            continue; 
          }
          backtrack(path.concat(nums[i]));
      }
  }
};


 console.log(permute(['a', 'b', 'c']));