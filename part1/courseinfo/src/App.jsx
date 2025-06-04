const Header = (props) => {
	return (
		<div>
			<h1>
				{props.course}
			</h1>
		</div>
	)
}

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part} {props.exercise}
			</p>
		</div>
	)
}

const Content = (props) => {
	return (
		<div>
		<Part part = {props.part[0]} exercise = {props.exercise[0]} />
		<Part part = {props.part[1]} exercise = {props.exercise[1]} />
		<Part part = {props.part[2]} exercise = {props.exercise[2]} />
		</div>
	)
}

const Total = (props) => {
	return (
		<div>
			<p>
				Number of exercises {props.sum}
			</p>
		</div>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}

	return (
		<div>
			<Header course = {course}/>
			<Content part = {[part1.name, part2.name, part3.name]} exercise = {[part1.exercises, part2.exercises, part3.exercises]} />
			<Total sum = {part1.exercises + part2.exercises + part3.exercises} />
		</div>
	)
}

export default App