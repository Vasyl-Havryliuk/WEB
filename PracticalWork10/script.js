const SortingLibrary = {
    exchangeSort(arr, sortOrder) {
      let comparisons = 0;
      let swaps = 0;
  
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          comparisons++;
          if ((sortOrder === 'asc' && arr[i] > arr[j]) || (sortOrder === 'desc' && arr[i] < arr[j])) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            swaps++;
          }
        }
      }
  
      console.log(`Exchange Sort: Comparisons - ${comparisons}, Swaps - ${swaps}`);
    },
  
    selectionSort(arr, sortOrder) {
      let comparisons = 0;
      let swaps = 0;
  
      for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
          comparisons++;
          if ((sortOrder === 'asc' && arr[j] < arr[minIndex]) || (sortOrder === 'desc' && arr[j] > arr[minIndex])) {
            minIndex = j;
          }
        }
        if (minIndex !== i) {
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
          swaps++;
        }
      }
  
      console.log(`Selection Sort: Comparisons - ${comparisons}, Swaps - ${swaps}`);
    },
  
    insertionSort(arr, sortOrder) {
      let comparisons = 0;
      let swaps = 0;
  
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && ((sortOrder === 'asc' && arr[j] > current) || (sortOrder === 'desc' && arr[j] < current))) {
          comparisons++;
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
        if (j !== i - 1) {
          swaps++;
        }
      }
  
      console.log(`Insertion Sort: Comparisons - ${comparisons}, Swaps - ${swaps}`);
    }
  };
  