import React, { Component, memo, useState, useEffect, useCallback, Fragment, useRef, useMemo } from 'react';
import './list.less';


let constList = [
	{
		name: '张三',
		age: 18,
		sex: '男',
		like: '抽烟',
		num: 0,
    id: 1
	},
	{
		name: '李四',
		age: 18,
		sex: '男',
		like: '喝酒',
		num: 0,
    id:2
	},
	{
		name: '王五',
		age: 18,
		sex: '女',
		like: '汤头',
		num: 0,
    id:3
	},
	{
		name: '赵六',
		age: 18,
		sex: '男',
		like: '唱歌',
		num: 0,
    id:4
	}
];
for(let i = 4; i<1000; i++) {
  constList.push({
		name: '张三' + i,
		age: 18,
		sex: '男',
		like: '抽烟',
		num: 0,
    id: i + 1
	});
}


// type noop = (...args: any[]) => any;

function usePersistFn(fn) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const persistFn = useRef();
  if (!persistFn.current) {
    persistFn.current = function (...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return persistFn.current;
}

function useMap(initialValue) {
  const initialMap = useMemo(
    () => (initialValue === undefined ? new Map() : new Map(initialValue)),
    [],
  );
  const [map, setMap] = useState(initialMap);

  const stableActions = useMemo(
    () => ({
      set: (key, entry) => {
        setMap((prev) => {
          const temp = new Map(prev);
          temp.set(key, entry);
          return temp;
        });
      },
      setAll: (newMap) => {
        setMap(new Map(newMap));
      },
      remove: (key) => {
        setMap((prev) => {
          const temp = new Map(prev);
          temp.delete(key);
          return temp;
        });
      },
      reset: () => setMap(initialMap),
    }),
    [setMap, initialMap],
  );

  const utils = {
    get: useCallback((key) => map.get(key), [map]),
    ...stableActions,
  };

  return [map, utils];
}

const mapList = new Map();


constList.forEach((item) => {
  mapList.set(item.id, item)
})


const List = () => {

  const [list, setList] = useMap(mapList);
  // { set, setAll, remove, reset, get }
  
  const [ parent, setParent] = useState(0);


  const del = usePersistFn((id, type) => {

    if(type === 'del') {
      setList.remove(id);
    }
    if (type === 'num') {
      let obj = setList.get(id);
      obj.num++;
      setList.set(id, {...obj})
    }
  })

	return (
		<div style={{ minHeight: '100vh', minWidth: '100vw', background: '#fff' }}>
      <div onClick={() => setParent(parent + 1)} className="pp">
        parent: {parent}
      </div>

      {
        Array.from(list).map((item, idx) => (
          <Child {...item[1]} index={item[1].id} key={item[1].id} del={del} />
        ))
      }

		</div>
	);
};




const Child = memo(function(props) {
  console.log(1111);
	const obj = props;
	return (
		<div className="child">
			索引： {props.index} {props.id}
			<div className="item">
				<div className="left">
					{obj.name} {obj.like} num：{obj.num}
				</div>
				<div className="right">
					<div onClick={() => props.del(props.index, 'del')}>删除</div>
					<div onClick={() => props.del(props.index, 'num')}>num++</div>
				</div>
			</div>
		</div>
	);
});
export default List;