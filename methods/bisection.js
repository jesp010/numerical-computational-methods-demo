function start(){
		const STOP_CONDITION =  0.0000001;
		return main(-400,300);
		
		function main (initial_value, final_value){
			return bisection(initial_value, final_value);
		}

		function func(x){
			
			if (typeof(x) == 'number')
			return  - 12 * (x * x * x * x * x) - 6.4 * (x * x * x) + 12;
			
			return "Not a number";
		}

		function bisection(initial_value, final_value){
			if (func(initial_value) * func(final_value) >= 0){
				console.log("'initial_value' or 'final_value' not defined");
				
				return;
			}

			let counter = 0;
			let middle_point = initial_value;
			console.log(`iv: ${initial_value}, fv ${final_value}, mp: ${middle_point}`);
			let results = {iv: initial_value, fv: final_value, iterations: [], mp: middle_point, ivs: [], fvs: [], mps: [], root}
			
			while((final_value - initial_value) >= STOP_CONDITION) {
			
				//find middle point
				middle_point = (initial_value + final_value) / 2;

				//check if middle point is root
				if (func(middle_point) == 0.0)
					break;
				else if (func(middle_point) * func(initial_value) < 0)
					final_value = middle_point;
				else
					initial_value = middle_point;
				
				results.iterations[counter] = counter;
				results.mps[counter] = middle_point;
				results.ivs[counter] = initial_value;
				results.fvs[counter] = final_value;
				counter++;
				console.log(`Counter: ${counter}, iv: ${initial_value}, fv: ${final_value}, mp: ${middle_point}`);
			}

			results.root = middle_point;
			return results;
		}
	}


module.exports.start = start;

