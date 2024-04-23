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
  
      console.log(`Сортування обміном: Порівняння - ${comparisons}, Обміни - ${swaps}`);
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
  
      console.log(`Сортування вибором: Порівняння - ${comparisons}, Обміни - ${swaps}`);
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
  
      console.log(`Сортування вставками: Порівняння - ${comparisons}, Обміни - ${swaps}`);
    },
  
    shellSort(arr, sortOrder) {
      let comparisons = 0;
      let swaps = 0;
      const n = arr.length;
      let gap = Math.floor(n / 2);
  
      while (gap > 0) {
        for (let i = gap; i < n; i++) {
          let temp = arr[i];
          let j = i;
          while (j >= gap && ((sortOrder === 'asc' && arr[j - gap] > temp) || (sortOrder === 'desc' && arr[j - gap] < temp))) {
            comparisons++;
            arr[j] = arr[j - gap];
            j -= gap;
            swaps++;
          }
          arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
      }
  
      console.log(`Сортування Шелла: Порівняння - ${comparisons}, Обміни - ${swaps}`);
    },
  
    quickSort(arr, sortOrder) {
      function partition(arr, low, high) {
        const pivot = arr[high];
        let i = low - 1;
  
        for (let j = low; j < high; j++) {
          if ((sortOrder === 'asc' && arr[j] < pivot) || (sortOrder === 'desc' && arr[j] > pivot)) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        }
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
      }
  
      function quickSortHelper(arr, low, high) {
        if (low < high) {
          const pi = partition(arr, low, high);
          quickSortHelper(arr, low, pi - 1);
          quickSortHelper(arr, pi + 1, high);
        }
      }
  
      let comparisons = 0;
      quickSortHelper(arr, 0, arr.length - 1);
  
      console.log(`Швидке сортування: Порівняння - ${comparisons}`);
    }
  };
  