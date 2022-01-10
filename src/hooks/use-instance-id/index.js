import { useMemo } from 'react';

const instanceMap = new WeakMap();

function createId(object) {
	const instances = instanceMap.get(object) || 1;

	instanceMap.set(object, instances + 1);

	return instances;
}

export default function useInstanceId(object, prefix, preferredId = '') {
	return useMemo(() => {
		if (preferredId) {
			return preferredId;
		}

		const id = createId(object);

		return prefix ? `${ prefix }-${ id }` : id;
	}, [object]);
}
