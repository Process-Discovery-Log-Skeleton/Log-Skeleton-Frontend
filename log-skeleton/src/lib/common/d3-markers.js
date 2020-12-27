import * as d3 from 'd3'

export const generateMarkers = (svg, radius) => {

    // Arrow at the beginning of the edge

    // Filled color
    svg.append('defs')
        .append('marker')
        .attr('id', 'arrowstart-fill')
        .attr('viewBox', '-0 -2.5 5 5')
        .attr('refX', -radius)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,0 L 5 ,-2.5 L 5, 2.5 L 0, 0')
        .attr('fill', '#000')
        .style('stroke','none')

    // Outlined
    svg.append('defs')
        .append('marker')
        .attr('id', 'arrowstart-outline')
        .attr('viewBox', '-0 -2.5 5 5')
        .attr('refX', -radius)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,0 L 5 ,-2.5 L 5, 2.5 L 0, 0')
        .attr('fill', '#f4f6f8')
        .style('stroke','black')
        .style('stroke-width', '1')

    // Arrow at the end of the arrow

    svg.append('defs')
        .append('marker')
        .attr('id', 'arrowend-fill')
        .attr('viewBox', '-0 -2.5 5 5')
        .attr('refX', radius - 1.5)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,-2.5 L 5 ,0 L 0, 2.5 L 0, -2.5')
        .attr('fill', '#000')
        .style('stroke','none')

    svg.append('defs')
        .append('marker')
        .attr('id', 'arrowend-outline')
        .attr('viewBox', '-0 -2.5 5 5')
        .attr('refX', radius - 1.5)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0,-2.5 L 5 ,0 L 0, 2.5 L 0, -2.5')
        .attr('fill', '#f4f6f8')
        .style('stroke','black')
        .style('stroke-width', '1')

    // Rect for the arrow

    svg.append('defs')
        .append('marker')
        .attr('id', 'rect-outline')
        .attr('viewBox', '0 -2.5 5 5')
        .attr('refX', -radius / 1.75)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0, -2.5 L 5, -2.5 L 5, 2.5 L 0, 2.5 L 0, -2.5')
        .attr('fill', '#f4f6f8')
        .style('stroke','black')
        .style('stroke-width', '1')

    svg.append('defs')
        .append('marker')
        .attr('id', 'rect-fill')
        .attr('viewBox', '0 -2.5 5 5')
        .attr('refX', -radius / 1.75)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M 0, -2.5 L 5, -2.5 L 5, 2.5 L 0, 2.5 L 0, -2.5')
        .attr('fill', 'black')
        .style('stroke','black')
        .style('stroke-width', '1')


    // Circles
    svg.append('defs')
        .append('marker')
        .attr('id', 'circle-fill')
        .attr('viewBox', '0 -2.5 5 5')
        .attr('refX', -radius + 4.5)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('circle')
        .attr('r', 5)
        .attr('fill', 'black')
        .style('stroke','black')
        .style('stroke-width', '1')

    svg.append('defs')
        .append('marker')
        .attr('id', 'circle-outline')
        .attr('viewBox', '-2.5 -2.5 5 5')
        .attr('refX', -radius + 4.5)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 6)
        .attr('markerHeight', 6)
        .attr('xoverflow', 'visible')
        .append('circle')
        .attr('r', 2)
        .attr('fill', '#f4f6f8')
        .style('stroke','black')
        .style('stroke-width', '0.5')


} 

