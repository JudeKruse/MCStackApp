document.addEventListener('DOMContentLoaded', function() {
  let ox = document.getElementsByClassName('over X')[0];
  let oy = document.getElementsByClassName('over Y')[0];
  let oz = document.getElementsByClassName('over Z')[0];
  let nx = document.getElementsByClassName('net X')[0];
  let ny = document.getElementsByClassName('net Y')[0];
  let nz = document.getElementsByClassName('net Z')[0];

  // Add input event listeners to detect changes in the Nether coordinates
  nx.addEventListener('input', updateOverworldCoordinates);
  ny.addEventListener('input', updateOverworldCoordinates);
  nz.addEventListener('input', updateOverworldCoordinates);

  // Add input event listeners to detect changes in the Overworld coordinates
  ox.addEventListener('input', updateNetherCoordinates);
  oy.addEventListener('input', updateNetherCoordinates);
  oz.addEventListener('input', updateNetherCoordinates);

  // Function to update Nether coordinates based on Overworld coordinates
  function updateNetherCoordinates() {
    // Get the values from Overworld coordinates
    let x = parseFloat(ox.value) || 0;
    let y = parseFloat(oy.value) || 0;
    let z = parseFloat(oz.value) || 0;

    // Multiply by 8 and round to the nearest integer
    let nxValue = Math.round(x * 8);
    let nyValue = y;
    let nzValue = Math.round(z * 8);
    // Set the values to Nether coordinates
    nx.value = nxValue;
    ny.value = nyValue;
    nz.value = nzValue;
  }

  // Function to update Overworld coordinates based on Nether coordinates
  function updateOverworldCoordinates() {
    // Get the values from Nether coordinates
    let nxValue = parseFloat(nx.value) || 0;
    let nyValue = parseFloat(ny.value) || 0;
    let nzValue = parseFloat(nz.value) || 0;

    // Divide by 8 and round to the nearest integer
    let oxValue = Math.round(nxValue / 8);
    let oyValue = nyValue;
    let ozValue = Math.round(nzValue / 8);

    // Set the values to Overworld coordinates
    ox.value = oxValue;
    oy.value = oyValue;
    oz.value = ozValue;
  }
});