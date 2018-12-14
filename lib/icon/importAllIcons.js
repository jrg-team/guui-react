let importAll = (requireContext) => requireContext.keys().forEach(requireContext);
importAll(require.context('../../icons/', true, /\.svg$/));

